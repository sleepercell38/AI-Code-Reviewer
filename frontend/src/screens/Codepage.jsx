import React, { useState } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import prism from "prismjs"
import { useEffect } from 'react'
import Editor from 'react-simple-code-editor'
import axios from "../config/Axios.js"
import Markdowm from "react-markdown"


// Load Prism languages
import "prismjs/components/prism-python"
import "prismjs/components/prism-java"
import "prismjs/components/prism-c"
import "prismjs/components/prism-cpp"
import "prismjs/components/prism-typescript"


const defaultSnippets = {
    javascript: `function sum(a, b) {\n  return a + b;\n}`,
    python: `def sum(a, b):\n    return a + b`,
    java: `public int sum(int a, int b) {\n    return a + b;\n}`,
    c: `int sum(int a, int b) {\n    return a + b;\n}`,
    cpp: `int sum(int a, int b) {\n    return a + b;\n}`,
    typescript: `function sum(a: number, b: number): number {\n  return a + b;\n}`
}


const Codepage = () => {



    const [language, setLanguage] = useState("javascript")
    const [code, setcode] = useState(`function sum()
    { return 1+1}`)

    const [review, setreview] = useState(null)

    const handleLanguageChange = (e) => {
        const selectedLang = e.target.value
        setLanguage(selectedLang)
        setcode(defaultSnippets[selectedLang] || "")
    }



    async function reviewCode() {

        const formattedPrompt = `Please review the following ${language} code and provide detailed feedback:\n\n\`\`\`${language}\n${code}\n\`\`\``


        const response = await axios.post("/ai/ai-getreview", { code: formattedPrompt })
        console.log(response.data)
        setreview(response.data)
    }



    useEffect(() => {
        prism.highlightAll()
    }, [code, language])






    return (
        <>

            <main style={{ background: "linear-gradient(90deg, #a8ff78 0%, #78ffd6 50%, #11998e 100%)" }} className="flex gap-1 p-2 h-[100vh] overflow-hidden bg-[#1e293b]">
                <div className="left bg-[#18181b] h-full w-[50%] rounded-3xl p-4 text-[#e2e8f0] relative">
                    <div className="code h-full w-full flex flex-col gap-2 overflow-auto">
                        <select
                            style={{
                                background: "linear-gradient(90deg, #a8ff78 0%, #78ffd6 50%, #11998e 100%)",
                                border: "none",
                                borderRadius: "1rem",
                                padding: "0.5rem 1.5rem",
                                fontWeight: "bold",
                                boxShadow: "0 2px 8px rgba(17,153,142,0.2)",
                                outline: "none",
                                transition: "transform 0.1s",
                                color: "#18181b"
                            }}



                            className="p-2 rounded text-black p bg-white w-fit ml-130"
                            value={language}
                            onChange={handleLanguageChange}
                        > 
                            <option value="javascript">JavaScript</option>
                            <option value="python">Python</option>
                            <option value="java">Java</option>
                            <option value="c">C</option>
                            <option value="cpp">C++</option>
                            <option value="typescript">TypeScript</option>
                        </select>









                        <Editor
                            value={code}
                            onValueChange={code => setcode(code)}
                            highlight={code => prism.highlight(code, prism.languages[language], language)}
                            padding={10}
                            style={{
                                fontFamily: '"Fira code", "Fira Mono", monospace',
                                fontSize: 16,
                                border: "1px solid #78ffd6",
                                borderRadius: "8px",
                                height: "100%",
                                width: "100%",
                                background: "#18181b",
                                color: "#e2e8f0",
                                caretColor: "#a8ff78", // Ensures the cursor is visible
                                outline: "none"
                            }}
                        />
                        <button
                            style={{
                                background: "linear-gradient(90deg, #a8ff78 0%, #78ffd6 50%, #11998e 100%)",
                                border: "none",
                                borderRadius: "1rem",
                                padding: "0.5rem 1.5rem",
                                fontWeight: "bold",
                                boxShadow: "0 2px 8px rgba(17,153,142,0.2)",
                                outline: "none",
                                transition: "transform 0.1s",
                                position: "absolute",
                                bottom: "1rem",
                                left: "35rem",
                                color: "#18181b"
                            }}
                            className='mb-5 rounded-md px-3 py-2 text-m'
                            onClick={reviewCode}
                        >
                            Review
                        </button>
                    </div>
                </div>
                <div className="right bg-[#343434] h-full w-[50%] rounded-3xl p-4 text-[#e2e8f0] text-m overflow-scroll">
                    <Markdowm>
                        {review}
                    </Markdowm>
                </div>
            </main>


        </>
    )
}

export default Codepage
