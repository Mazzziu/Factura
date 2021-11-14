import { Alert, Button } from "react-bootstrap";

const AlertDanger = ({ show, setShow, title, body }) => {
    if (show) {
        return (
            <Alert variant='danger' onClose={() => setShow(false)} dismissible>
                <Alert.Heading>{title}</Alert.Heading>
                <p>{body}</p>
                <hr />
                <div className='d-flex justify-content-end'>
                    <Button
                        onClick={() => {
                            setShow(false);
                            window.location.reload();
                        }}
                        variant='outline-danger'
                        className='mx-3'
                    >
                        Recargar página
                    </Button>
                    <Button
                        onClick={() => {
                            setShow(false);
                        }}
                        variant='outline-danger'
                    >
                        Cerrar
                    </Button>
                </div>
            </Alert>
        );
    } else {
        return null;
    }
};

export default AlertDanger;
