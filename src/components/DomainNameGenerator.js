import { useState } from "react";
import "../css/DomainNameGenerator.css";

import { FaRegCopy } from "react-icons/fa6";

function DomainNameGenerator() {
  const [input, setInput] = useState("");
  const [domainNames, setDomainNames] = useState([]);
  const [msg, setMsg] = useState("");
  const [copiedMsg, setCopiedMsg] = useState(null);

  const prefixArr = [
  "get","try","go","join","use","my","the","hey",
  "super","ultra","hyper","mega","micro","nano","quantum","turbo","rapid","swift",
  "next","neo","meta","omni","prime","pro","max","plus",
  "astro","terra","aqua","cyber","cloud","data","dev","ai","io",
  "rocket","boost","kite","bright","true","real","clear","solid","core","jam"
];

  const affixArr = [
  "bug","anthropod","lemur","rat","fly","io","hub","lab","itch","base",
  "stack","grid","node","nest","sync","flow","forge","core","pilot","bot",
  "kit","zone","crate","vault", "neon", "orb","flint","unit","galaxy", "bio",
  "press","pulse","prime","loop","nomad","flora","beam","byte","ops","dev",
  "data","cloud","map","mesh","api","ui","ux","ai","ml","vr","xr",
  "nano","micro","macro","meta","neo","nova","astro","terra","luna","solar",
  "aqua","aero","ion","flux","quark","quant","orbit","spectra","gamma",
  "dash","ping","zip","zap","zing","pop","spin","snap","flip","shift","boost",
  "drive","pilot","launch","ignite","glow","spark", "jet","flame","fire","nuke",
  "dock","den","bay","yard","park","path","lane","port","pier","post","hub",
  "forge","foundry","works","studio","space","room","desk","pad","bench",
  "cart","tote","bag","market","mart","exchange","bazaar","dome",
  "root","seed","sprout","bloom","leaf","twig","moss","ember","mint","honey",
  "fox","owl","yak","otter","lynx","manta","gecko","mole","bee","ant","slug"
];

  const suffixArr = 
  [
  ".com",".io",".org",".net",".co",".dev",".app",".ai",".xyz",".tech",
  ".tools",".studio",".systems",".software",".digital",".design",".site",".page",
  ".cloud",".space",".network",".media",".store",".shop",".finance",
  ".capital",".fund",".ventures",".gg"
];

  const generateName = () => {
    const sanitizedInput = input 
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "");
    
    const start = prefixArr[Math.floor(Math.random() * prefixArr.length)];
    const middle = affixArr[Math.floor(Math.random() * affixArr.length)];
    const end = suffixArr[Math.floor(Math.random() * suffixArr.length)];

    const combinedWord =  input ? `${sanitizedInput}${start}${middle}${end}` : 
                          `${start}${middle}${Math.floor(Math.random() * 100)}${end}`;
    setDomainNames([combinedWord]);
  }

  const generateTenNames = () => {
     const sanitizedInput = input 
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "");

    const tenWords = []; // instantiate an array to contain the ten words
    // for loop to count 10 incrementally
    for (let c = 0; c < 10; c++) { 
      const start = prefixArr[Math.floor(Math.random() * prefixArr.length)]; // randomly select prefix
      const middle = affixArr[Math.floor(Math.random() * affixArr.length)]; // randomly select affix (root)
      const end = suffixArr[Math.floor(Math.random() * suffixArr.length)]; // randomly select suffix

      const combinedWord =  input ? `${sanitizedInput}${start}${middle}${end}` : 
                          `${start}${middle}${Math.floor(Math.random() * 100) * c}${end}`; // combined word
      
      tenWords.push(combinedWord); // push the combined words into the array
    }
    setDomainNames(tenWords); // display them
  }

  const generateThirtyNames = () => {
    const sanitizedInput = input 
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "");

    const thirtyWords = [];

    for (let c = 0; c < 30; c++) {
      const start = prefixArr[Math.floor(Math.random() * prefixArr.length)]; // randomly select prefix
      const middle = affixArr[Math.floor(Math.random() * affixArr.length)]; // randomly select affix (root)
      const end = suffixArr[Math.floor(Math.random() * suffixArr.length)]; // randomly select suffix

      const combinedWord =  input ? `${sanitizedInput}${start}${middle}${end}` : 
                          `${start}${middle}${Math.floor(Math.random() * 100) * c}${end}`; // combined word
      thirtyWords.push(combinedWord);
    }
    setDomainNames(thirtyWords);
  }

  const generateSixtyNames = () => {
    const sanitizedInput = input 
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, ""); 

    const sixtyWords = [];

    for (let c = 0; c < 60; c++) {
      const start = prefixArr[Math.floor(Math.random() * prefixArr.length)]; // randomly select prefix
      const middle = affixArr[Math.floor(Math.random() * affixArr.length)]; // randomly select affix (root)
      const end = suffixArr[Math.floor(Math.random() * suffixArr.length)]; // randomly select suffix

      const combinedWord =  input ? `${sanitizedInput}${start}${middle}${end}` : 
                          `${start}${middle}${Math.floor(Math.random() * 100) * c}${end}`; // combined word
      sixtyWords.push(combinedWord);
    }
    setDomainNames(sixtyWords);
  }

  const generateOneHundredNames = () => {
    const sanitizedInput = input 
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "");

    const oneHundredWords = [];

    for (let c = 0; c < 100; c++) {
      const start = prefixArr[Math.floor(Math.random() * prefixArr.length)]; // randomly select prefix
      const middle = affixArr[Math.floor(Math.random() * affixArr.length)]; // randomly select affix (root)
      const end = suffixArr[Math.floor(Math.random() * suffixArr.length)]; // randomly select suffix

      const combinedWord =  input ? `${sanitizedInput}${start}${middle}${end}` : 
                          `${start}${middle}${Math.floor(Math.random() * 100) * c}${end}`; // combined word
      oneHundredWords.push(combinedWord);
    }
    setDomainNames(oneHundredWords);
  }

  return (
    <div className="container">
      <header id="main-header" className="header__container">
        <h1 className="header">Domain Name Generator</h1>
        <p className="subheader">
          Use this generator to generate domain names
        </p>
      </header>
      <main id="container-input" className="input__container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a word"
        />
       
      </main>
      <div className="btns">
        <button className="generate-btn" onClick={generateName}>Generate Name</button>
        <button className="ten-generate-btn" onClick={generateTenNames}>Generate 10 Names</button>
        <button className="thirty-generate-btn" onClick={generateThirtyNames}>Generate 30 Names</button>
        <button className="sixty-generate-btn" onClick={generateSixtyNames}>Generate 60 Names</button>
        <button className="onehundred-generate-btn" onClick={generateOneHundredNames}>Generate 100 Names</button>
      </div>
      
      <main id="name-container" className="name__container">
        {domainNames.length === 0 ? (
          <p className="empty-msg">
            Generate from a preexisting list or a keyword to get started
          </p>
        ) : (
          <div className="name-wrapper">
            {domainNames.map((name, index) => (
              <div key={index} className="name-eclipse">
                <p className="name">{name}</p>
                  <button className="copy-btn" onClick={() =>
                    navigator.clipboard.writeText(name) // copies name to system clipboard
                    .then(() => { setCopiedMsg(name); setMsg("Copied") }) // if successful, the copied text will pass
                    .catch(() => { setCopiedMsg(name); setMsg("Copy failed.") }) // else, the text isn't copied
                    .finally(() => setTimeout(() => setMsg(""), 1400))
                  }>
                    <FaRegCopy />
                  </button>
                   {copiedMsg === name && msg && (
                      <small className="copy-text" aria-live="polite">{msg}</small>
                    )}
              </div>
              
            ))}
           
          </div>
        )}
        
      </main>
    </div>
  );
}

export default DomainNameGenerator;
