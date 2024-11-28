function UserProfile() {
    return (
      <div className="user-profile bg-gray-100 p-4 sm:p-6 md:p-8 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto my-10 rounded-lg shadow-lg">
        <img
          src="https://via.placeholder.com/150"
          alt="User"
          className="rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 mx-auto"
        />
        <h1 className="text-lg sm:text-xl md:text-2xl text-blue-800 my-4 text-center">
          John Doe
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center">
          Developer at Example Co. Loves to write code and explore new technologies.
        </p>
      </div>
    );
  }
  
  export default UserProfile;
  