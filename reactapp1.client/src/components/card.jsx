function Card(props) {

    console.log(props);
  return (
      <div>
          <div class="card">
              <img src={props.img} />
              <h1>{props.user},{props.age}</h1>
              <p>iuhfuhufh rheiuu ureoiov svbisu oihrog sbvbjsb pihfg sjbvb sr l hlsh svdh vsvjbb
              </p>
              <button>View Profile</button>
            

          </div>
      </div>
  );
}

export default Card;