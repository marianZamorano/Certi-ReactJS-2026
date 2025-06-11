const useProjects = () => {


    
  const getProjects = async (userId: string) => {
    try {
      const projects = await getProjectByUserId(userId);
      setProjects(projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };
};
