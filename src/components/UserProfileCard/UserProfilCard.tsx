import type { UserProfileCardProps } from '../../types';

const UserProfileCard: React.FC<UserProfileCardProps> = ({
  user,
  showEmail,
  showRole,
  onEdit,
  children
}) => {
  return (
    <div className="flex flex-col justify-center items-center p-4 bg-blue-100 max-w-xs rounded-xl">
      <div className="flex items-center text-center">
        <img src={user.avatarUrl} alt={user.name} className="w-24 h-24 rounded-full object-cover" />
        <div className="ml-4">
          <h2 className="text-lg font-bold">{user.name}</h2>
          {showEmail && <p>{user.email}</p>}
          {showRole && <p>{user.role}</p>}
        </div>
      </div>
      <div className="mt-4">
        {onEdit && (
          <button
            onClick={() => onEdit(user.id)}
            className="bg-blue-500 text-white px-6 py-2 rounded-md"
          >
            Edit Profile
          </button>
        )}
        {children}
      </div>
    </div>
  );
};

export default UserProfileCard;