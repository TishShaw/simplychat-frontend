import { Spinner} from 'react-bootstrap';

function Loader(props) {
    return (
			<Spinner
				animation='border'
				role='status'
				style={{
					height: '100px',
					width: '100px',
					margin: 'auto',
					display: 'block',
				}}>
                    <span class='spinner-loader'>Loading...</span>
            </Spinner>
		);
}

export default Loader;