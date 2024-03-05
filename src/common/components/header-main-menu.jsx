import { useNavigate } from 'react-router-dom';
export const HeaderMainMenu = () => {
  const navigate = useNavigate();
  const handleClick =()=>{
    navigate('/')
  }
  return (
    <div className="home-parent">
        <div className="home3">
          <span  onClick={handleClick} style={{cursor:'pointer'}}>HOME</span>
          <span className="span1"> </span>
        </div>
        <div className="Menu"  onClick={handleClick}>BAGS</div>
        <div className="Menu"  onClick={handleClick}>SNEAKERS</div>
        <div className="Menu"  onClick={handleClick}>BELT</div>
        <div className="Menu"  onClick={handleClick}>CONTACT</div>
      </div>
  );
}