* {
  margin: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
body {
  color: #333;
  font-family: Arial, Helvetica, sans-serif;
}

.wrapper {
  padding: 1em;
}

.wrapper div {
  background: #eee;
  border: 1px solid #666;
  padding: 1em;
  text-align: center;
}

.flex-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.flex-item {

  -webkit-box-flex: 0;
  -ms-flex: 0 32%;
  flex: 0 32%;
  height: 100px;
  margin-bottom: 2%; 
}


@media (max-width: 1023px) {
  .flex-item {
    -webkit-box-flex: 0;
    -ms-flex: 0 49%;
    flex: 0 49%;
  }
}


@media (max-width: 479px) {
  .flex-item {
    -webkit-box-flex: 0;
    -ms-flex: 0 100%;
    flex: 0 100%;
  }
}
