import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
    <div style={{ height: '100vh'}}>
        
        <PrettyChatWindow
            projectId="4a10307c-fb4c-44b3-91fc-535adfdb931e"
            username={props.user.username}
            secret={props.user.secret}
            style={{ height: '100%' }}
        />

    </div>
    )
}

export default ChatsPage