import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";

import type { Project } from "../interfaces/projectInterface";
import { useAuthStore } from "../store/authStore";
import { useProjectsStore } from "../store/useProjectsStore";

const projectSchema = Yup.object({
  projectName: Yup.string().required("El nombre del proyecto es requerido"),
});

export const useProjects = () => {
  const navigate = useNavigate();

  const user = useAuthStore((state) => state.user);
  const {
    fetchProjects,
    removeProject,
    createProject,
    updateProject,
    projects,
  } = useProjectsStore((state) => state);

  const [openDialog, setOpenDialog] = useState(false);
  const [project, setProject] = useState<Project | null>(null);

  const handleSubmit = async (values: { projectName: string }) => {
    if (project?.name) {
      updateProject({
        ...project,
        name: values.projectName,
      });
    } else {
      createProject({
        id: uuidv4(),
        name: values.projectName,
        owner: user.id,
        description: values.projectName,
        date: new Date().toISOString(),
      });
    }

    formik.resetForm();
    setProject(null);
    setOpenDialog(false);
  };
  const formik = useFormik({
    initialValues: {
      projectName: "",
    },
    validationSchema: projectSchema,
    onSubmit: handleSubmit,
  });
  const openDialogHandler = () => {
    setOpenDialog(true);
  };

  const closeDialogHandler = async () => {
    await formik.resetForm();
    setOpenDialog(false);
  };

  const editProjectHandler = async (project: Project) => {
    formik.setValues({ projectName: project.name });
    setProject(project);
    setOpenDialog(true);
  };

  useEffect(() => {
    fetchProjects(user.id);
  }, [fetchProjects, user.id]);

  const goToProject = (projectId: string) => {
    navigate(`/app/projects/${projectId}`);
  };

  return {
    removeProject,
    projects,
    formik,
    openDialog,
    closeDialogHandler,
    openDialogHandler,
    goToProject,
    editProjectHandler,
    project,
  };
};