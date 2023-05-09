import './cliche.css'

const EurovisionCliche = ({cardArray}) => {

  //  const newCard = cardArray.map((cliche, index) => {
            // return (cliche={cliche}, key={index}
        // });
        const item1 = cardArray[0]
        const item2 = cardArray[1]
        const item3 = cardArray[2]
        const item4 = cardArray[3]
        const item5 = cardArray[4]
        const item6 = cardArray[5]

    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        btn.classList.add('active');
        });
    });


    

    return ( 
      
        <div id = "container"> 
        
      <div className = "grid-container">
        
        <div className="grid-item">
          <button type = "button" id = "b1" class = "btn">{item1}</button>
        </div>
        <div className="grid-item">
          <button type = "button" id = "b2" class = "btn">{item2}</button>
        </div>
        <div className="grid-item">
          <button type = "button" id = "b3" class = "btn">{item3}</button>
        </div>
        <div className="grid-item">
          <button type = "button" id = "b4" class = "btn">{item4}</button>
        </div>
        <div className="grid-item">
          <button type = "button" id = "b5" class = "btn">{item5}</button>
        </div>
        <div className="grid-item">
          <button type = "button" id = "b6" class = "btn">{item6}</button>
        </div>
        
      </div>
      
    </div>
    
     );
}
 
export default EurovisionCliche;

