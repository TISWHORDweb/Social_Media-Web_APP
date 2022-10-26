import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModal({modalOpened, setModalOpened}){
    const theme = useMantineTheme()

    return(
        <Modal 
            overlayColor={theme.colorScheme === 'dark' ?theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            size='55%'
            opened = {modalOpened}
            onClose={()=> setModalOpened(false)}
        >
        <form className="infoForm">
            <h3>Your info</h3>
            <div className="">
                <input type="text"
                    className="infoInput"
                    name="FirstName"
                    placeholder="First Name"
                />
                
                <input type="text"
                    className="infoInput"
                    name="LastName"
                    placeholder="Last Name"
                />
            </div>
            <div className="">
                <input type="text"
                    className="infoInput"
                    name="worksAT"
                    placeholder="Works at "
                />
            </div>
            <div className="">
                <input type="text"
                    className="infoInput"
                    name="livesIn"
                    placeholder="Lives in"
                />
                
                <input type="text"
                    className="infoInput"
                    name="country"
                    placeholder="Country"
                />
            </div>
            <div className="">
                <input type="text"
                    className="infoInput"
                    placeholder="Relationship Status"
                />
            </div>
            <div className="">
                Profile Image 
                <input type="file" name="profileImg" />
                Cover Image 
                <input type="file" name="coverImg" />
            </div>
            <button className="button infoButton"> Updates</button>
        </form>
        </Modal>
    )
}

export default ProfileModal

