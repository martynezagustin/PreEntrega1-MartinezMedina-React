import { useNavigate, useParams } from 'react-router-dom';
import '../../style.css';
import { API_URLS } from '../../constants';
import { useFetch } from '../../../hooks/useFetch';
import Details from '../../components/Details';

function ProductDetail() {

    const { productId } = useParams();
    const urlProductDetail = `${API_URLS.PRODUCTS.url}/${productId}`
    const navigate = useNavigate()

    const { data, loading, error } = useFetch(urlProductDetail, API_URLS.PRODUCTS.config)
    console.log(productId);
    return (
        <>
            <p>Details</p>
            <div className="headerContainer">
                <button onClick={() => navigate(-1)} className='backButton'>&larr; Back</button>
                <h2 className='headerTitleCard'>Product Detail</h2>
            </div>
            <Details {...data} />
        </>
    )
}

export default ProductDetail