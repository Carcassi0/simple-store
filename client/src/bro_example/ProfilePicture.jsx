
function ProfilePicture() {
    const imageUrl ="https://media.licdn.com/dms/image/v2/D4E03AQHZYnKI-w-vhQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1705313693398?e=1729123200&v=beta&t=fXGv11TYWft3I_Ymep0AZLmL4KAQXGbT5i0T57iC76I";

    const handleClick = (e) => e.target.style.display = "none";
    return(<img onClick={(e) => handleClick(e)} src = {imageUrl}></img>);
}

export default ProfilePicture