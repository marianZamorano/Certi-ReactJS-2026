interface ListComponentProps {
    refranes: string[];
}

export const ListComponent = ({ refranes }: ListComponentProps) => {
  return (
    <div>
      refranes:
      {refranes.map((refran) => {
        return (
          <div
            key={refran}
            className="bg-white 
                            border 
                            border-gray-300 
                            p-4 rounded-md 
                            shadow-md mb-2"
          >
            {refran}
          </div>
        );
      })}
    </div>
  );
};
