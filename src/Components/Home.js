import BingoCard from "./BingoCard";

const HomePage = () => {
    return ( 
        <div className="container">
        <div className="row">
          <header className="animate-charcter">
            <h3>EUROVISION BINGO</h3>
          </header>
            <main>
              <BingoCard />
            </main>
        </div>
      </div>
     );
}
 
export default HomePage;