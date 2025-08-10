import { useState } from 'react'
import './SearchBar.css'

interface SearchBarProps{
    onSearch? : (nickname: string) => void; 
}

const SearchBar: React.FC<SearchBarProps> = ({onSearch}) =>{
    const[nickname,setNickname] = useState("");

    const handleSearch = () =>{
        if(!nickname.trim()) return;
        if(onSearch) onSearch(nickname.trim());
        setNickname("");
    };

    return(
        <div className='search-bar'>
            <input
                type="text"
                placeholder="닉네임"
                value={nickname}
                onChange={(e)=>setNickname(e.target.value)}
                onKeyDown={(e)=> e.key ==="Enter" && handleSearch()}
            />
        </div>
    )
}

export default SearchBar;
