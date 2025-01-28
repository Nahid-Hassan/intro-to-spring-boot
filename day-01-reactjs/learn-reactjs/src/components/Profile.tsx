import './Profile.css'

const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

export default function Profile() {
    return (
        <div>
            <h2>Profile Page</h2>
            <img className="avatar" 
                src={user.imageUrl} 
                alt={'Photo of ' + user.name} 
                style= {{
                    width: user.imageSize,
                    height: user.imageSize,
                    borderRadius: user.imageSize / 2,
                }} />
        </div>
    );
} 