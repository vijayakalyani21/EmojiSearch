import React,{useState} from 'react'
const emojiData=[
    {id:1,
    symbol:"😂",
    name:"laugh"
},
{id:2,
    symbol:"😭",
    name:"cry"
},
{id:3,
    symbol:"❤️",
    name:"heart"
},
{id:4,
    symbol:"😍",
    name:"love"
},
{id:5,
    symbol:"👌",
    name:"super"
},
{id:6,
    symbol:"'👍",
    name:"ok"
},
{id:7,
    symbol:"🤣",
    name:"very happy"
},
{id:8,
    symbol:"😴",
    name:"sleep"
},
{id:9,
    symbol:"🔊",
    name:"speaker"
},
{id:10,
    symbol:"🔕",
    name:"muted"
}
]
function Emoji() {
    const [searchEmoji,setSearchEmoji] = useState("");
   
    const handleChange = (e) =>{
        setSearchEmoji(e.target.value);
    }

    const showEmoji = emojiData.filter((emoji) => {
        const emojiName = emoji.name.toLowerCase();
        return emojiName.includes(searchEmoji.toLowerCase())

    });
  return (
    <div>
        <h1>React Emoji Search App!!!!</h1>
        <input type='text' placeholder='Search the Emoji..!!' value={searchEmoji} onChange={handleChange}></input>
        <div>{
            showEmoji.map((emoji) => emoji.symbol)}
        </div>
        </div>
  )
}

export default Emoji