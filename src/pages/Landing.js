import { Link } from "react-router-dom"
import Button from "../components/Button";
import Modal from "../components/Modal";
import { useGlobalContext } from "../context/AppContext";

export default function Landing() {
    const { isModalOpen, setIsModalOpen } = useGlobalContext();

    const handleClick = () => {
        setIsModalOpen(!isModalOpen);
    };

  return (
      <div>
          <div className="mt-4 mx-4">
              Landing Page
          </div>
          <div className="w-60 mx-auto">
              <Button
                  text="Open Modal"
                  onclick={handleClick}
              />
          </div>
          <div>
              <Link to="/login">
                  Go To Login
              </Link>
          </div>
          {isModalOpen && <Modal />}
    </div>
  )
}