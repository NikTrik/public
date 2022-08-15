import styled from 'styled-components/native';


const PostView = styled.View`

  flex-direction: row;
  padding: 15px;
  border-top-width:5px;
  background-color:white;
  border-top-color: green; 
  border-top-color: ${({ color = 'green' }) => color};

  margin-right: 15px;
  margin-left:15px;
  margin-top: 22px;
`;

const AmountOfMoney = styled.Text`
  font-size: 30px;
  font-weight: 700;
  text-align:center;
`;

const UnitNumberAndIndicator = styled.Text`
  font-size: 18px;
  margin-top: 1px;
  color: ${({ color = 'green' }) => color};
  text-align:left;
  
  
`;
const DateUpdate = styled.Text`
  font-size:12px;
  text-align:left;
`
const PreviousMonth = styled.Text`
  font-size: 12px;
  text-align:center;
`

const BackGround = styled.View`
    background-color:rgba(0,0,0,0.4)

`
const PostDetails =styled.View`
  flex:1;
  flex-direction:column;
  justify-content: center;
  flex:1;
`;
export const Post = ({title, imageUrl, un, color}) => {
  return (
    <BackGround >
      <PostView color = {color}>
        <PostDetails>
          <UnitNumberAndIndicator color = {color} >{title}</UnitNumberAndIndicator> 
          <DateUpdate>id = {color}</DateUpdate>
          <AmountOfMoney>100 {un}</AmountOfMoney>
          <PreviousMonth>Июнь: 999руб.</PreviousMonth>
        </PostDetails>
      </PostView>
    </BackGround>
  );
}