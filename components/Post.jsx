import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';


const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-top-width:15px;
  background-color:white;
  margin-right: 15px;
  margin-left:15px;
  margin-top: 22px;
  border-radius:10px;

`;
const Colour = styled.Text`
  border-top-width:5px;

`;

const AmountOfMoney = styled.Text`
  font-size: 30px;
  font-weight: 700;
  text-align:center;
  
 
  
  
`;
const UnitNumberAndIndicator = styled.Text`
  font-size: 18px;
  text-align:left;
  
`;
const DateUpdate = styled.Text`
  font-size:12px;
  text-align:left;
  flex:1;
  margin-left:6px;
`
const PreviousMonth = styled.Text`
  font-size: 12px;
  text-align:center;
  
`

const BackGround = styled.View`
    background-color:rgba(0,0,0,0.25)
`
const PostDetails =styled.View`
  flex:1;
  flex-direction:column;
  justify-content: center;
  flex:1;
`;



export const Post = ({title, CategoryId, un, color}) => {
    return <BackGround>
    
    <PostView borderTopColor = {color}>
    
      <PostDetails >
        
        <UnitNumberAndIndicator style = {{color:color}} > {title}  </UnitNumberAndIndicator> 
        <DateUpdate>id = {CategoryId}</DateUpdate>
        <AmountOfMoney style={{color:color}}>100 <AmountOfMoney style={{color:'black', fontSize:20}}>{un}</AmountOfMoney></AmountOfMoney> 
        
        <PreviousMonth>Июнь: <PreviousMonth style = {{color:color}}>999</PreviousMonth> руб.</PreviousMonth>
      </PostDetails>
    </PostView>
  </BackGround>
}