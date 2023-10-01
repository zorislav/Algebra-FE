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
      -ms-flex: 0 100%;
          flex: 0 100%;
  height: 100px;
  margin-bottom: 2%; 
}


@media (min-width: 480px) {
  .flex-item {
    -webkit-box-flex: 0;
        -ms-flex: 0 49%;
            flex: 0 49%;
  }
}


@media (min-width: 768px) {
  .flex-item {
    -webkit-box-flex: 0;
        -ms-flex: 0 32%;
            flex: 0 32%;
  }
}


@media (min-width: 1024px) {
  .flex-item {
    -webkit-box-flex: 0;
        -ms-flex: 0 24%;
            flex: 0 24%;
  }
}


@media (min-width: 1200px) {
  .flex-item {
    -webkit-box-flex: 0;
        -ms-flex: 0 19%;
            flex: 0 19%;
  }
}