const {
    smd,
    sleep
    } = require('../lib'),pedroM = {"smd" : "asta" }

smd({
    cmdname: "pedro",    
    type: "fun",    
    info: "cute pedro",   
    on: "text" ,
    filename: __filename,
},async(citel,match , {smd}) => {
  let ispedro = smd ==="pedro"?true : citel.isPublic && match.toLowerCase().includes("pedro") ? true : ""       
      if (ispedro && !pedroM[citel.id]) {
      pedroM[citel.id] =true;
      let pedro = ['❤', '💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌', '🙂', '🤗', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈','🎁', '🎈', '😀', '😎', '❤️', '💔', '🌟', '✨', '🔥', '💧', '🍎', '🍊','🎁', '🎈', '😀', '😎', '❤️', '💔', '🌟', '✨', '🔥', '💧', '🍎', '🍊','🌸', '🌹', '🎮', '🎧', '📚', '🖊️', '🐱', '🐶', '🚗', '🚀', '🏠', '🏙️','🎤', '🎷', '⚽', '🏀', '🕹️', '🖥️', '💡', '🔌', '⏰', '📅', '🌈', '🌌','🎨', '🎭', '✈️', '🛳️', '🪙', '💎', '👑', '🎩', '🪐', '☀️', '🧩', '🧸','🛠️', '🔧', '🍕', '🍔', '💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤','🐵', '🐸', '🐼', '🦄', '🐥', '🐢', '🦋', '🐙', '🐞', '🦓', '🐬', '🦜','🌳', '🌵', '🍁', '🍀', '🌻', '🌊', '⛄', '🌋', '🔥', '🌀', '🌙', '⭐','🎵', '🎻', '🥁', '🎺', '🎷', '🎸', '🎹', '🖼️', '🎬', '📷', '🎯', '🎲','📱', '💻', '🖨️', '🖱️', '🔍', '📀', '💿', '🕰️', '🔒', '🔓', '🔑', '📎','✂️', '🖍️', '🖊️', '📝', '📂', '📌', '📆', '📗', '📕', '📘', '📙', '📒']
      const { key } = await citel.reply( `(\\_/)\n( •.•)\n/>🤍`)
      for (let i = 0; i < pedro.length; i++) {
        await sleep(500);
        await citel.reply(`(\\_/)\n( •.•)\n/>${pedro[i]}`, { edit: key })             
      } 
    }

})
