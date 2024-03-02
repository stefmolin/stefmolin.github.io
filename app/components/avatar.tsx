interface AvatarProps {
  name: string;
  picture: string;
}

const Avatar = ({ name, picture }: AvatarProps) => {
  return (
    <div className="flex items-center">
      <img src={picture} className="w-12 h-12 rounded-full mr-3 sm:mr-4" alt={name} />
      <div className="text-xl font-bold text-nowrap">{name}</div>
    </div>
  );
};

export default Avatar;
