interface TitleProps {
  title: string;
  stylesTitle?: string;
  styles: object;
}

export const TitleComponent = ({
  title = "Refranes de nuestros amigos",
  stylesTitle,
  styles
}: TitleProps) => {
  return (
    <h1
      className={`text-2xl font-bold mb-4 ${stylesTitle}`}
      style={{ textAlign: "center", ...styles }}
    >
      {title}
    </h1>
  );
};
