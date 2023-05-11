import BingoCard from "./BingoCard";

const HomePage = () => {
    return ( 
        <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h3 className="animate-charcter"> EUROVISION BINGO</h3>
            <BingoCard />
          </div>
        </div>
      </div>
     );
}
 
export default HomePage;