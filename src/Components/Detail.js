import React from "react";
import axios from "axios";
import styled from 'styled-components'
import { Spinner, Card, CardDeck ,Button} from "react-bootstrap";
import { useParams,useHistory } from "react-router-dom";

const Detail = () => {
  const { id, title } = useParams();
  const history = useHistory();

  const [detail, setDetail] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const getData = async (id) => {
    try {
      setLoading(true); //เริ่มหมุน
      const resp = await axios.get(
        "https://api.codingthailand.com/api/course/" + id
      );
      //console.log(resp.data)
      setDetail(resp.data.data);
    } catch (error) {
      setError(error);
      console.log(error.resp);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getData(id);
  }, [id]);
  if (loading === true) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="warning" />
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-center mt-5 text-danger">
        <h4>Error from API, plese try again</h4>
        <p>{error.response.data.message}</p>
      </div>
    );
  }
  return (
    <DetailStyled>
          <h2>
            {title} ({id})
          <Button className="ml-3" onClick={()=>{history.goBack()}} variant="primary">Back</Button>
          </h2>


          <div className="row">
          <CardDeck>
            {detail.length > 0 ? (
              detail.map((d, index) => {
                return (
                    <div className="col-md-4" key={(d.ch_id)}>
                        <Card className="mb-4 shadow-sm">
                            <Card.Body>
                            <Card.Title>{d.ch_title}</Card.Title>
                            <Card.Text>
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="footer">
                            <small className="text-muted">
                                {d.ch_dateadd}
                            </small>
                            </Card.Footer>
                        </Card>
                  </div>
                );
              })
            ) : (
              <h1>No Data</h1>
            )}
          </CardDeck>
          </div>
          </DetailStyled>
  );
};
const DetailStyled = styled.div`
h2{
    padding-bottom : 2rem;
    
}
.card{
    background-color: var(--background-dark-grey);
    
  }
  .footer{
    background-color: var(--background-dark-color);
  }
`

export default Detail;
