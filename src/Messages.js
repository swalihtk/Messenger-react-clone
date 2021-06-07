import React, { forwardRef } from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Messages.css';


const Messages= forwardRef(({ username, messageObj }, ref)=> {
    const isUser = username === messageObj.username;

    return (
        <div ref={ ref} className={isUser?'messages-user':'messages-guest'}>
            <Card className={isUser?'card-user':'card-guest'}>
                <CardContent>
                    <Typography variant="h4" component="p">
                        <span className="messages-typography">
                            {!isUser?`${messageObj.username||'unknown'}:`:''}
                        </span>
                            {messageObj.chat}
                    </Typography>
                </CardContent>
            </Card>   
        </div>
    )
})

export default Messages
