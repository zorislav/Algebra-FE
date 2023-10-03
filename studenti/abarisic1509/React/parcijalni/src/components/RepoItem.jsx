import React from "react";
import Button from "./Button";

const RepoItem = ({ name, description, url }) => {
	return (
		<article className="w-full h-full border bg-neutral-200 flex flex-col items-center justify-between gap-6 px-3 py-5 text-center shadow-lg">
			<h3 className="line-clamp-1 text-2xl font-semibold max-w-full">{name}</h3>
			<p className=" line-clamp-3 text-sm text-slate-600">{description}</p>
			<Button isLink={true} linkHref={url} targetBlank={true}>
				Visit
			</Button>
		</article>
	);
};

export default RepoItem;
