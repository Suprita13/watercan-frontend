import React, { useEffect, useState, useRef } from "react";
import { 
    HeaderContainer, 
    HeaderWrapper, 
    HeaderTitle, 
    ProfileContainer, 
    ProfileIcon, 
    DropdownMenu 
} from "./Header.styles";
import { FaUserCircle } from "react-icons/fa"; // Importing profile icon

const Header = ({ title }) => {
    const [adminUsername, setAdminUsername] = useState("");
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = "/login";
    };

    return (
        <HeaderContainer>
            <HeaderWrapper>
                <HeaderTitle>{title}</HeaderTitle> {/* Use title prop directly */}
                
                <ProfileContainer ref={dropdownRef}>
                    <span>Welcome, admin!</span>
                    
                    <ProfileIcon >
                        <FaUserCircle size={24} />
                    </ProfileIcon>

                    {dropdownOpen && (
                        <DropdownMenu>
                            <button onClick={handleLogout}>Logout</button>
                        </DropdownMenu>
                    )}
                </ProfileContainer>
            </HeaderWrapper>
        </HeaderContainer>
    );
};

export default Header;
