import React from "react";
import Notification from "../../component/hook/Notification";


const lst = [
    {
        id : 1,
        msg : "한 주 고생 많이 하셨고 즐거운 주말 보내세요"
    },
    {
        id : 2,
        msg : "말복만 남았네요."
    },
    {
        id : 3,
        msg : "불금을 즐겁게"
    }
]

var timer;
class NotificationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications : []
        }
    }

    componentDidMount() {
        console.log("[debug] >>> NotificationPage componentDidMount ");
        const {notifications} = this.state;
        timer = setInterval(() => {
            // if(notifications.length < lst.length) {

            //     notifications.push(lst[notifications.length]);

            //     this.setState({
            //         notifications : notifications,
            //     });
            // } else {
            //     this.setState({
            //         notifications : [],
            //     });
            //     clearInterval(timer);
            // }

            this.setState((pre) => {
                const next = [...pre.notifications];

                if(next.length < lst.length) {
                    next.push(lst[next.length]);
                    return {notifications : next}
                } else {
                    clearInterval(timer);
                    return {notifications : []}
                }
            });

        }, 5000 );

    }
    componentWillUnmount() {
        console.log("[debug] >>> NotificationPage componentWillUnmount ");

        if(timer) {
            clearInterval(timer);
        }
        
    }

    render() {
        return(
            <div>
                {
                    this.state.notifications.map((notification) => {
                        return ( <Notification 
                            key={notification.id}
                            id={notification.id}
                            msg={notification.msg}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default NotificationPage;

