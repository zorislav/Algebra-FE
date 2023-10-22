/* eslint-disable tailwindcss/no-custom-classname */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Button, Loader, RepoItem } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../lib/store/slices/userSlice";

const fakeRepos = [
  {
    id: "r1",
    name: "Napomena:",
    description: "Morala sam osigurati listu lažnih podataka ako se (opet) probije limit na github API-ju",
    url: "https://www.google.com"
  },
  {
    id: "r2",
    name: "Medium-Length Title",
    description: "This is a repository with a medium-length description. It provides some information about the project.",
    url: "https://www.google.com"
  },
  {
    id: "r3",
    name: "A Very Long Title That Goes On and On and On",
    description: "This is a repository with a very detailed and lengthy description. It contains a lot of information about the project, its purpose, and how to use it effectively.",
    url: "https://www.google.com"
  },
  {
    id: "r4",
    name: "Another",
    description: "Another short description.",
    url: "https://www.google.com"
  },
  {
    id: "r5",
    name: "Title",
    description: "A repository with a very brief description.",
    url: "https://www.google.com"
  },
  {
    id: "r6",
    name: "Unique Title with Specific Details",
    description: "This repository has a unique title and a description that provides specific details about the project, its features, and its goals.",
    url: "https://www.google.com"
  },
  {
    id: "r7",
    name: "Project",
    description: "A project with a one-word description.",
    url: "https://www.google.com"
  },
  {
    id: "r8",
    name: "Exciting New Project",
    description: "Introducing an exciting new project that aims to revolutionize the way we do things. This description is moderately long and provides insights into the project's objectives and benefits.",
    url: "https://www.google.com"
  },
  {
    id: "r9",
    name: "Project X",
    description: "This is Project X, a mysterious repository with a brief description. Its purpose remains a closely guarded secret.",
    url: "https://www.google.com"
  },
  {
    id: "r10",
    name: "The Repository",
    description: "A generic-sounding repository with a very general description. You'll find this repository for various purposes.",
    url: "https://www.google.com"
  },
  {
    id: "r11",
    name: "Detailed Project Title with a Long Description",
    description: "The project title is quite detailed, and the description is equally lengthy, offering a deep dive into the project's features, functionality, and implementation.",
    url: "https://www.google.com"
  },
  {
    id: "r12",
    name: "Codebase for Various Functions",
    description: "This repository contains a codebase for various functions and utilities. The description highlights its versatility and usefulness for different tasks.",
    url: "https://www.google.com"
  }
];

const UserDetails = () => {
	const params = useParams();
  const dispatch = useDispatch()
	const [loading, setLoading] = useState(true);
	const [repos, setRepos] = useState(null);	
  
  const userData = useSelector(state => state.user.userData)

	//console.log('repos', repos)

	useEffect(() => {
		fetchUserData();
	}, []);

	const fetchUserData = async () => {
		try {
			const res = await fetch(
				`https://api.github.com/users/${params.id}/repos`
			);
      if(!res.ok) {
        setRepos(fakeRepos)
      } else {
        const data = await res.json();
        setRepos(data);
      }
      setLoading(false);
		} catch (error) {
			console.log("error", error);
			toast.error(
				"Something went wrong. Please refresh the page and try again"
			);
      setLoading(false);
		}
	};

  const handleBackClick = () => {
    dispatch(setUser({
      name: "",
      bio: "",
      location: "",
      avatarUrl: "",
    }))
  }

	return (
		<div className="flex min-h-screen w-full flex-col py-10">
			{loading ? (
				<Loader />
			) : (
				<main className=" max-w-screen-2xl mx-auto w-full px-4 md:px-10 xl:px-20 relative">
        <div className="flex flex-col items-center justify-center gap-6">
        <div onClick={handleBackClick}>
          <Button isLink={true} linkHref="/" additionalClassname="fixed top-6 left-0 rounded-r-full z-50 w-fit">Back</Button>
        </div>
          <div className=" aspect-square h-32 w-32 border border-slate-500 rounded-full bg-slate-200 overflow-hidden">
            {userData.avatarUrl && <img src={userData.avatarUrl} alt={userData.name}  />}
          </div>
						<h1 className="text-2xl font-bold">{userData?.name}</h1>
        </div>
					<section className="flex flex-col gap-6 pt-6">
          <dl className="flex gap-2">
            <dt className="text-lg font-bold">Bio:</dt>
            <dd> {userData.bio ? userData.bio : "--" }</dd>
          </dl>
          <dl className="flex gap-2">
            <dt className="text-lg font-bold">Location:</dt>
            <dd>{userData.location ? userData.location : "--"}</dd>
          </dl>
          <dl className="flex flex-col gap-2">
            <dt className="text-lg font-bold">Repositories:</dt>
            <dd>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
                  {repos?.map((item) => (
                    <li key={item.id}>
                    <RepoItem name={item.name} description={item.description} url={item.ul} />
                  </li>
                  ))} 
              </ul>
            </dd>
          </dl>
					</section>
				</main>
			)}
		</div>
	);
};

export default UserDetails;
