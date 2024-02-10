"use client";

import styles from "./writePost.module.css";
import Image from 'next/image';
import { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import ReactQuill from 'react-quill';

const data = [
  {
    id: 1,
    slug: "algorithms",
    title: "#Algorithms"
  },
  {
    id: 2,
    slug: "systems",
    title: "#Systems"
  },
  {
    id: 3,
    slug: "food",
    title: "#Food"
  },
  {
    id: 4,
    slug: "travel",
    title: "#Travel"
  },
  {
    id: 5,
    slug: "networks",
    title: "#Networks"
  },
  {
    id: 6,
    slug: "books",
    title: "#Books"
  },
  {
    id: 7,
    slug: "shows",
    title: "#Shows"
  },
  {
    id: 8,
    slug: "javascript",
    title: "#JavaScript"
  },
  {
    id: 9,
    slug: "python",
    title: "#Python"
  },
]

const WritePost = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(false);

  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");

  const [tags, setTags] = useState([])

  function addTag(e){
    if (e.key !== 'Enter') return
    const value = e.target.value
    if(!value.trim()) return
    setTags([...tags, value])
    e.target.value = ''
  }

  function removeTag(index){
    setTags(tags.filter((el, i) => i !== index))
  }



  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />

      <div className={styles.boxContainer}>
        <div className={styles.boxOne}>
          <div className={styles.selectBox}>
            <button className={styles.button} onClick={() => setOpen(!open)}>
              <Image src="/plus.png" alt="" width={16} height={16} />
            </button>
            {open && (
              <div className={styles.add}>
                <input
                  type="file"
                  id="image"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
                <button className={styles.addButton}>
                  <label htmlFor="image">
                    <Image src="/image.png" alt="" width={16} height={16} />
                  </label>
                </button>
                <button className={styles.addButton}>
                  <label htmlFor="image">
                    <Image src="/external.png" alt="" width={16} height={16} />
                  </label>
                </button>
                <button className={styles.addButton}>
                  <label htmlFor="image">
                    <Image src="/video.png" alt="" width={16} height={16} />
                  </label>
                </button>
              </div>
            )}
          </div>
                
          <div className={styles.selectBox}>
            <select className={styles.select} onChange={(e) => setCatSlug(e.target.value)}>
              <option value="style">style</option>
              <option value="fashion">fashion</option>
              <option value="food">food</option>
              <option value="culture">culture</option>
              <option value="travel">travel</option>
              <option value="coding">coding</option>
            </select>
          </div>
        </div>

        <div className={styles.boxTwo}>
          enter some tags ...
          <div className={styles.tagsInputContainer}>

            { tags.map((tag, index) => (
              <div className={styles.tagsItem} key={index}>
                <span className={styles.tagsText}> {tag} </span>
                <span className={styles.tagsClose} onClick={() => removeTag(index)}> &times; </span>
              </div>
            ))}
            <input className={styles.tagsInput} onKeyDown={addTag} type="text" placeholder="Type something" />
          </div>
        </div>
      </div>

      <div className={styles.editor}>
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      {/* <button className={styles.publish} onClick={handleSubmit}> */}
      <button className={styles.publish}>
        Publish
      </button>
    </div>
  )
}

export default WritePost;