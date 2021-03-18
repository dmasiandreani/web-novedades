import {Link} from 'react-router-dom';

export default function Home(){
    return(
        <div>
            <button>
            <Link to={`/TablaContratos`}> TablaContratos</Link>
            </button>
            <button>
            <Link to={`/TablaNovedades`}> TablaNovedades</Link>
            </button>
        </div>        
    );
}