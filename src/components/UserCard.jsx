import { TiGift } from "react-icons/ti"
import { FaRegPenToSquare } from "react-icons/fa6"
import { LuTrash2 } from "react-icons/lu"

function UserCard ({ user, openEdit, deleteUser }) {

  const birthday = new Date(user?.birthday).toLocaleDateString()

  return (
    <div className='card'>
      <h3 className='card__name'>{user?.first_name} {user?.last_name}</h3>
      <div className='card__info'>
        <div>
          <span className='card__label'>Correo</span>
          {user?.email}
        </div>
        <div>
          <span className='card__label'>Cumpleaños</span>
          <span className='card__data'><TiGift className='icon--gift' /> {birthday}</span>
        </div>
      </div>
      <div className='card__btns'>
        <button className='btn btn--delete' onClick={() => deleteUser(user?.id)}><LuTrash2 /></button>
        <button className='btn btn--edit' onClick={() => openEdit(user)}><FaRegPenToSquare /></button>
      </div>
    </div>
  )
}
export default UserCard