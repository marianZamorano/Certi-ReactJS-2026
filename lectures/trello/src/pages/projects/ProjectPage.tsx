import { useEffect, useState } from "react";
import { getStorage } from "../../helpers/localStorage";

function ProjectPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userStorage = getStorage("user");
    setUser(userStorage);
  }, []);
  return (
    <div>
      <h1>Project Page</h1>
      <p>This is the project page where you can manage your projects.</p>
    </div>
  );
}

export default ProjectPage;
