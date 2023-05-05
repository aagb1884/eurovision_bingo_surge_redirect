import EurovisionCliche from "./cliche";
import { GridBorder } from "./StyleComponents";


const BingoCard = () => {
    return ( 
        <section>
            <h2>Bingo Card - grid of six cliches</h2>
                <div classname="grid">
                    <GridBorder>
                        <ul>
                        <EurovisionCliche />
                        </ul>
                    </GridBorder> 
                </div>
        </section>
        );
}
 
export default BingoCard;