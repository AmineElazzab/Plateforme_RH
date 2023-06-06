import { ClassValue, clsx } from "clsx";
import fileDownload from "js-file-download";
import { twMerge } from "tailwind-merge";
import { downloadAttachment } from "~api/attachments";
import { fetchRole } from "~api/roles";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export function toCapitalized(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function handleDownload(url: string, filename: string) {
  const ext = filename.split(".")[filename.split(".").length - 1];
  downloadAttachment(filename).then((res) => {
    fileDownload(res, `${filename}`);
  });
}

export const redirectUser = async (roleId: number, router: any) => {
  try {
    const roleData = await fetchRole(roleId);
    console.log({roleData});

    const  role_name  = roleData.role_name;
    console.log(role_name);
    switch (role_name.toLowerCase()) {
      case "admin":
        router.push("/admin");
        break;
      case "project manager":
        router.push("/pm");
        break;
      case "project leader":
        router.push("/pl");
        break;
      case "collaborator":
        router.push("/collaborator");
        break;
    }
  } catch (error) {
    // Handle the error
    console.log(error);
    throw error;
  }
};
