export type fileInfo = {
   id: string;
   fileName: string;
   fileSize: number;
   fileType: string;
   fileUrl: string;
   password: string;
   shortUrl: string;
   userEmail: string;
   userName: string;
};

export type EmailProps = {
   emailToSend: string;
   shortUrl: string;
   userName: string;
   fileName: string;
   fileType: string;
   fileSize: number;
};
