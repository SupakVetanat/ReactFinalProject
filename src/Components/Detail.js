import React from "react";
import axios from "axios";
import styled from 'styled-components'
import { Spinner} from "react-bootstrap";
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
        <Spinner animation="border" variant="danger" />
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
          <button onClick={()=>{history.goBack()}}>Back</button>
          </h2>
          <div className="card-container">
          {detail.length > 0 ? (
              detail.map((d, index) => {
                return (
              <div class="box" key={(d.ch_id)}>
                  <h2>{d.ch_title}</h2>
                  <p> {d.ch_dateadd}</p>
              </div>
          
              );
            })
          ) : (
            <h1>No Data</h1>
          )}
          </div>
          </DetailStyled>
  );
};
const DetailStyled = styled.div`
body {
  background: #f0f0f2;
}
button {
  border:none;
  background: var(--primary-color);
  color: var(--white-color);
  border-radius: 10px;
  margin: 1rem;
  padding: 10px;
  font-size:1.3rem;
}

.card-container {
	display: grid;
    width:100%;
    height:100%;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;

.box {
  background: var(--sidebar-dark-color);
  margin-top: 5%;
  width: 80%;
  height:80%;
  mex-height:80%;
  padding: 50px 20px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.box:hover {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  animation-name: example;
  animation-duration: 0.25s;
  border-left: 8px solid var(--primary-color);
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
h2{
  font-size:1.3rem;
}


p {
  text-align: justify;
}

@keyframes example {
    0%   {border-left: 2px solid var(--primary-color);}
    25%  {border-left: 3px solid var(--primary-color);}
    50%  {border-left: 4px solid var(--primary-color);}
    100% {border-left: 5px solid var(--primary-color);}
}

`

export default Detail;
