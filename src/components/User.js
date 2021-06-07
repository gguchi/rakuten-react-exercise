function User(props){
    
    return(

        <>
    <div className="user">
      <h2 style={{ backgroundColor: props.theColor }}>
        Hello, {props.firstName}
      </h2>
      <img src={props.image} width="350" height="350"/>
    </div>

        </>

    );

}

export default User;