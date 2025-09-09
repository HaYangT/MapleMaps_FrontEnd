import { useState, useRef, useEffect } from 'react';
import './SearchBar.css'



const SearchBar: React.FC = () =>{
    const[nickname,setNickname] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);
    const handleSearch = async () =>{
        if(!nickname.trim()) return;
        try{
            const response = await fetch('url',{
                //데이터를 받기위한 비동기
                method : "POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify({nickname : nickname.trim()}),
            });
            const data = await response.json();
            //데이터 변환을 기다려야하므로 비동기
            console.log("res : ",data);
        }catch(error){
            console.error("닉네임 검색 불가",error);
        }
    };
    
    useEffect(()=>{
        //마운트
        const handleKeyDown = (e:KeyboardEvent) =>{
            if(e.key =="Enter"){
                inputRef.current?.focus();
            }
        };
        window.addEventListener("keydown",handleKeyDown);
        /*
        window.addEventListener(eventType, callback);
        eventType : 이벤트 종류 (click,keydown,scroll....)
        callback : 함수
        */
        
        return()=>{
            window.removeEventListener("keydown",handleKeyDown);
            /*
            언마운트 될때 이벤트리스너 종료.
            */
        }
    },[]);

    return(
        <div className='search-bar'>
            <input
                type="text"
                className='nes-input'
                placeholder="타락파워전사"
                value={nickname}
                ref={inputRef}
                onChange={(e)=>setNickname(e.target.value)}
                onKeyDown={(e)=> e.key ==="Enter" && handleSearch()}
            />
        </div>
    )
}

export default SearchBar;
