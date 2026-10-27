type ProfileProps = {
  name: string;
  course: string;
  semester: number;
};

function Profile({ name, course, semester }: ProfileProps) {
  return (
    <div className="profile">
      <h2>{name}</h2>
      <p>Course: {course}</p>
      <p>Semester: {semester}</p>
    </div>
  );
}

export default Profile;