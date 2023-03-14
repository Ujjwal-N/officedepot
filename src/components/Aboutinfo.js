import Card from 'react-bootstrap/Card';
import styled from "styled-components";
import delivery from '../Images/about.jpg';


const Container = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  margin: auto;
  border: 2px solid #444;
  margin-top:70px;
`;




const ImgContainer = styled.div`
  height: 100%;
  width:50%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;




  const Image = styled.img`
  height: 100%;
  max-width: 100%;
`;


function Aboutinfo() {
  const containerStyle = {
    transform: 'scale(0.8)',
    marginTop: '-170px',
  };
 
  const headerStyle = {
    fontSize: '45px',
    fontWeight: 'bold',
  };
 
  const quoteStyle = {
    fontSize: '30px',
  };
 
  const pStyle = {
    fontSize: '25px',
  };




  return (
    <div style={containerStyle}>
       <Card style={{ height: '450px'}}>
        <Card.Header style={headerStyle}>About Us</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0" style={quoteStyle}>
            <p style={pStyle}>
              {' '}
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egestas sed urna eget pretium. Curabitur ut justo viverra, tempor enim ac, laoreet magna. Maecenas quis elementum libero, vel dignissim purus. Quisque vitae lacus id lorem efficitur condimentum vel et arcu. Aenean eleifend aliquam dui, sed suscipit diam ultricies sed. Etiam quis rutrum erat, quis sagittis orci. Morbi non justo consequat ligula lobortis iaculis a sed urna. Aenean et vehicula sem. Aliquam sed odio vitae mauris tristique rhoncus id bibendum libero. In rutrum, tortor sed tincidunt cursus, tellus nibh fermentum dolor, quis semper massa nisl in orci. Suspendisse auctor, ex vestibulum eleifend sagittis, tortor nunc ultricies lacus, eu sollicitudin augue ex eu magna. Cras at nulla ornare, egestas magna sed, rutrum ante. Phasellus a arcu nibh. Morbi lectus quam, fermentum eu blandit sit amet, tincidunt et leo. Sed quis tincidunt ipsum. Vestibulum nulla lacus, aliquam a rhoncus a, tempor a erat. Etiam enim nibh, efficitur aliquet suscipit ut, consectetur ut metus. Etiam euismod pulvinar urna. Nullam maximus dignissim justo quis aliquam. Morbi rutrum fringilla metus non dictum. Aenean quam augue, placerat a massa nec, commodo auctor mauris. Sed accumsan nulla in lectus porttitor rutrum. Aliquam erat volutpat. Nullam nec consectetur felis, sollicitudin luctus risus. Nulla rhoncus velit lorem, et euismod enim dapibus at. Proin et ante a sapien congue tempus. Aenean vitae justo finibus, sodales tellus non, rhoncus ex.
               {' '}
            </p>
            <footer className="blockquote-footer">
              Some Guy <cite title="Source Title">from Office Depot</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>


      <Container>
        <ImgContainer>
            <Image src={delivery} />
        </ImgContainer>
      </Container>




    </div>
  );
}


export default Aboutinfo;

