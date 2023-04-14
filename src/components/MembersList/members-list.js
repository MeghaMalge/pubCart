import React from "react";
import Member from "../member/member";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class MembersList extends React.Component {

    constructor() {
        super();
        this.state = {  members: [
            {
              id: 1,
              name: "Rehan",
              email: "rehan@gmail.com",
              avatarUrl: "https://avatars.githubusercontent.com/u/1?v=4",
                designation: "CEO",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            },
            {
                id: 2,
                name: "Megha",
                email: "megha@gmail.com",
                avatarUrl: "https://avatars.githubusercontent.com/u/2?v=4",
                  designation: "CEO",
                  description: "Lorem ipsum dolor sit amet, consectetur"
              },
              {
                id: 3,
                name: "Rohit",
                email: "rohit@gmail.com",
                avatarUrl: "https://avatars.githubusercontent.com/u/3?v=4",
                  designation: "CEO",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              },
              {
                id: 4,
                name: "Srushti",
                email: "srushti@gmail.com",
                avatarUrl: "https://avatars.githubusercontent.com/u/4?v=4",
                  designation: "CEO",
                  description: "Lorem ipsum dolor sit amet, consectetur"
              },
              {
                id: 5,
                name: "Aaron",
                email: "aaron@gmail.com",
                avatarUrl: "https://avatars.githubusercontent.com/u/5?v=4",
                  designation: "CEO",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              }
          ] }
    }

        render() {
            let allMembers = this.state.members.map(member => <Member memberdetails={member} key={member.id}
            />)

            return (
                <React.Fragment>
                <Container className="mt-5">
                    <Row xs={1} sm={2} lg={3} xl={4}
                    className="g-4">
                        {allMembers}
                    </Row> 
                </Container>
            </React.Fragment>
            )
        }
}

export default MembersList;
