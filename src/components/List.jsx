import { useState, useEffect } from 'react';
function List({ notes }) {

    return (
        <div className='list'>
            <table>
              <tbody>
                {notes.map((note) => (
                  <tr key={note.id} className={`note-row`}>
                    <td className='note-title'>{note.title}</td>
                    <td className='note-description'>{note.description}</td>
                    <td className='note-date'>{new Date(note.date).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
    )
}
export default List