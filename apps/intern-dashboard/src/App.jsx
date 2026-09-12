import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const menuItems = [
  { name: "Dashboard", icon: "⌂" },
  { name: "Tasks", icon: "✓" },
  { name: "Progress", icon: "↗" },
  { name: "Leaderboard", icon: "★" },
  { name: "Profile", icon: "●" },
];

const initialTasks = [
  {
    id: 1,
    title: "Build responsive portfolio website",
    week: "Week 1",
    status: "Completed",
  },
  {
    id: 2,
    title: "Create Next.js landing page",
    week: "Week 2",
    status: "Completed",
  },
  {
    id: 3,
    title: "Build Intern Dashboard UI",
    week: "Week 3",
    status: "In Progress",
  },
  {
    id: 4,
    title: "Deploy project on Vercel",
    week: "Week 3",
    status: "Pending",
  },
];

const progressData = [
  { week: "Week 1", progress: 100 },
  { week: "Week 2", progress: 100 },
  { week: "Week 3", progress: 70 },
  { week: "Week 4", progress: 0 },
];

const leaderboard = [
  { rank: 1, name: "Ayesha Khan", score: 950, initials: "AK" },
  { rank: 2, name: "Ali Raza", score: 920, initials: "AR" },
  { rank: 3, name: "Tayyeba Tariq", score: 890, initials: "TT" },
  { rank: 4, name: "Hassan Ahmed", score: 850, initials: "HA" },
  { rank: 5, name: "Sara Malik", score: 820, initials: "SM" },
];

function App() {
  const [activePage, setActivePage] = useState("Dashboard");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [tasks, setTasks] = useState(initialTasks);
  const [submission, setSubmission] = useState("");

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const changePage = (page) => {
    setActivePage(page);
    setMobileMenu(false);
  };

  const toggleTask = (id) => {
    setTasks((current) =>
      current.map((task) =>
        task.id === id
          ? {
              ...task,
              status:
                task.status === "Completed"
                  ? "Pending"
                  : "Completed",
            }
          : task
      )
    );
  };

  const submitWork = (e) => {
    e.preventDefault();

    if (!submission.trim()) return;

    alert("Your work has been submitted successfully!");
    setSubmission("");
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">

      {/* MOBILE OVERLAY */}
      {mobileMenu && (
        <div
          onClick={() => setMobileMenu(false)}
          className="fixed inset-0 z-40 bg-black/70 md:hidden"
        />
      )}

      <div className="flex min-h-screen">

        {/* DESKTOP SIDEBAR */}
        <Sidebar
          activePage={activePage}
          changePage={changePage}
        />

        {/* MOBILE SIDEBAR */}
        <div
          className={`fixed left-0 top-0 z-50 h-full w-72 transform bg-[#111111] transition-transform duration-300 md:hidden ${
            mobileMenu
              ? "translate-x-0"
              : "-translate-x-full"
          }`}
        >
          <div className="flex h-full flex-col p-5">

            <div className="mb-8 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">
                  Nexariza<span className="text-blue-500">.</span>
                </h2>

                <p className="text-sm text-gray-500">
                  Intern Portal
                </p>
              </div>

              <button
                onClick={() => setMobileMenu(false)}
                className="rounded-lg px-3 py-2 text-xl text-gray-400 hover:bg-gray-800 hover:text-white"
              >
                ×
              </button>
            </div>

            <nav className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => changePage(item.name)}
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                    activePage === item.name
                      ? "bg-blue-600 text-white"
                      : "text-gray-400 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-black/20">
                    {item.icon}
                  </span>

                  {item.name}
                </button>
              ))}
            </nav>

            <div className="mt-auto rounded-xl border border-gray-800 p-4">
              <p className="text-xs text-gray-500">
                Internship Program
              </p>

              <p className="mt-1 font-semibold">
                Week 3 of 4
              </p>

              <div className="mt-3 h-2 rounded-full bg-gray-800">
                <div className="h-full w-[75%] rounded-full bg-blue-600" />
              </div>
            </div>

          </div>
        </div>

        {/* MAIN */}
        <main className="min-w-0 flex-1">

          {/* HEADER */}
          <header className="border-b border-gray-800 bg-[#0d0d0d] px-4 py-4 sm:px-6 lg:px-8">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                {/* MOBILE MENU BUTTON */}
                <button
                  onClick={() => setMobileMenu(true)}
                  className="rounded-lg border border-gray-800 px-3 py-2 text-xl md:hidden"
                >
                  ☰
                </button>

                <div>
                  <p className="text-xs text-gray-500 sm:text-sm">
                    Nexariza Intern Portal
                  </p>

                  <h1 className="mt-1 text-xl font-bold sm:text-2xl">
                    {activePage}
                  </h1>
                </div>

              </div>

              {/* PROFILE */}
              <div className="flex items-center gap-3">

                <div className="hidden text-right sm:block">
                  <p className="text-sm font-semibold">
                    Tayyeba Tariq
                  </p>

                  <p className="text-xs text-gray-500">
                    Web Developer Intern
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold">
                  TT
                </div>

              </div>

            </div>
          </header>

          {/* CONTENT */}
          <section className="p-4 sm:p-6 lg:p-8">

            {activePage === "Dashboard" && (
              <Dashboard
                completedTasks={completedTasks}
                changePage={changePage}
              />
            )}

            {activePage === "Tasks" && (
              <Tasks
                tasks={tasks}
                toggleTask={toggleTask}
                submission={submission}
                setSubmission={setSubmission}
                submitWork={submitWork}
              />
            )}

            {activePage === "Progress" && <Progress />}

            {activePage === "Leaderboard" && (
              <Leaderboard />
            )}

            {activePage === "Profile" && <Profile />}

          </section>

        </main>
      </div>
    </div>
  );
}

/* ================= SIDEBAR ================= */

function Sidebar({ activePage, changePage }) {
  return (
    <aside className="hidden w-64 shrink-0 border-r border-gray-800 bg-[#111111] md:block">

      <div className="sticky top-0 flex h-screen flex-col p-5">

        <div className="mb-10">
          <h2 className="text-2xl font-bold">
            Nexariza<span className="text-blue-500">.</span>
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Intern Portal
          </p>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => changePage(item.name)}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
                activePage === item.name
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-black/20">
                {item.icon}
              </span>

              <span className="text-sm font-medium">
                {item.name}
              </span>
            </button>
          ))}
        </nav>

        <div className="mt-auto rounded-xl border border-gray-800 bg-[#0d0d0d] p-4">

          <p className="text-xs text-gray-500">
            Internship Program
          </p>

          <p className="mt-1 font-semibold">
            Week 3 of 4
          </p>

          <div className="mt-3 h-2 rounded-full bg-gray-800">
            <div className="h-full w-[75%] rounded-full bg-blue-600" />
          </div>

        </div>

      </div>
    </aside>
  );
}

/* ================= DASHBOARD ================= */

function Dashboard({ completedTasks, changePage }) {
  const stats = [
    ["Tasks Done", completedTasks, "Completed tasks", "✓"],
    ["Score", "890", "Total points", "★"],
    ["Days Remaining", "12", "Until internship ends", "◷"],
  ];

  return (
    <div className="mx-auto max-w-7xl">

      <div className="mb-8">
        <p className="text-sm text-gray-500">
          Welcome back 👋
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Hello, Tayyeba!
        </h2>

        <p className="mt-2 text-gray-400">
          Keep going — you're doing great with your internship.
        </p>
      </div>

      {/* STATS */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        {stats.map(([title, value, subtitle, icon]) => (
          <div
            key={title}
            className="rounded-2xl border border-gray-800 bg-[#111111] p-6 transition hover:border-blue-600/50"
          >
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-gray-500">
                  {title}
                </p>

                <p className="mt-2 text-3xl font-bold">
                  {value}
                </p>

                <p className="mt-1 text-xs text-gray-600">
                  {subtitle}
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/10 text-xl text-blue-500">
                {icon}
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* LOWER CARDS */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">

        <div className="rounded-2xl border border-gray-800 bg-[#111111] p-6">

          <h3 className="text-lg font-semibold">
            Quick Actions
          </h3>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">

            <button
              onClick={() => changePage("Tasks")}
              className="rounded-xl bg-blue-600 px-4 py-3 font-medium hover:bg-blue-700"
            >
              View Tasks
            </button>

            <button
              onClick={() => changePage("Progress")}
              className="rounded-xl border border-gray-700 px-4 py-3 font-medium hover:bg-gray-800"
            >
              Check Progress
            </button>

          </div>
        </div>

        <div className="rounded-2xl border border-gray-800 bg-[#111111] p-6">

          <p className="text-sm text-gray-500">
            Current Focus
          </p>

          <h3 className="mt-2 text-xl font-semibold">
            Intern Dashboard UI
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            Build a responsive dashboard using React,
            Tailwind CSS and Recharts.
          </p>

          <div className="mt-5">

            <div className="mb-2 flex justify-between text-xs">
              <span className="text-gray-500">
                Progress
              </span>

              <span className="text-blue-500">
                70%
              </span>
            </div>

            <div className="h-2 rounded-full bg-gray-800">
              <div className="h-full w-[70%] rounded-full bg-blue-600" />
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

/* ================= TASKS ================= */

function Tasks({
  tasks,
  toggleTask,
  submission,
  setSubmission,
  submitWork,
}) {
  return (
    <div className="mx-auto max-w-5xl">

      <div className="mb-8">
        <h2 className="text-2xl font-bold">
          Weekly Tasks
        </h2>

        <p className="mt-2 text-gray-500">
          Complete your assigned internship tasks.
        </p>
      </div>

      <div className="space-y-3">

        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex flex-col gap-4 rounded-2xl border border-gray-800 bg-[#111111] p-5 sm:flex-row sm:items-center sm:justify-between"
          >

            <div className="flex items-start gap-4">

              <input
                type="checkbox"
                checked={task.status === "Completed"}
                onChange={() => toggleTask(task.id)}
                className="mt-1 h-5 w-5 accent-blue-600"
              />

              <div>
                <h3
                  className={`font-semibold ${
                    task.status === "Completed"
                      ? "text-gray-500 line-through"
                      : ""
                  }`}
                >
                  {task.title}
                </h3>

                <p className="mt-1 text-xs text-gray-600">
                  {task.week}
                </p>
              </div>

            </div>

            <span
              className={`w-fit rounded-full px-3 py-1 text-xs ${
                task.status === "Completed"
                  ? "bg-green-500/10 text-green-400"
                  : task.status === "In Progress"
                  ? "bg-blue-500/10 text-blue-400"
                  : "bg-yellow-500/10 text-yellow-400"
              }`}
            >
              {task.status}
            </span>

          </div>
        ))}

      </div>

      {/* SUBMISSION */}
      <div className="mt-8 rounded-2xl border border-gray-800 bg-[#111111] p-6">

        <h3 className="text-lg font-semibold">
          Submit Your Work
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          Add your GitHub repository or project link.
        </p>

        <form
          onSubmit={submitWork}
          className="mt-5 flex flex-col gap-3 sm:flex-row"
        >

          <input
            type="url"
            required
            value={submission}
            onChange={(e) => setSubmission(e.target.value)}
            placeholder="https://github.com/username/project"
            className="flex-1 rounded-xl border border-gray-700 bg-[#0a0a0a] px-4 py-3 text-sm outline-none focus:border-blue-500"
          />

          <button
            type="submit"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
          >
            Submit
          </button>

        </form>

      </div>
    </div>
  );
}

/* ================= PROGRESS ================= */

function Progress() {
  const timeline = [
    ["Week 1", "Portfolio Website", "Completed"],
    ["Week 2", "Next.js Landing Page", "Completed"],
    ["Week 3", "Intern Dashboard", "In Progress"],
    ["Week 4", "Final Project & Deployment", "Upcoming"],
  ];

  return (
    <div className="mx-auto max-w-7xl">

      <div className="mb-8">
        <h2 className="text-2xl font-bold">
          Progress Timeline
        </h2>

        <p className="mt-2 text-gray-500">
          Track your internship journey week by week.
        </p>
      </div>

      {/* GRAPH */}
      <div className="rounded-2xl border border-gray-800 bg-[#111111] p-5 sm:p-6">

        <h3 className="mb-6 text-lg font-semibold">
          Weekly Progress
        </h3>

        <div className="h-72 w-full">

          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={progressData}>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#222"
              />

              <XAxis
                dataKey="week"
                stroke="#777"
              />

              <YAxis
                domain={[0, 100]}
                stroke="#777"
              />

              <Tooltip
                contentStyle={{
                  backgroundColor: "#111",
                  border: "1px solid #333",
                  borderRadius: "10px",
                }}
              />

              <Line
                type="monotone"
                dataKey="progress"
                stroke="#2563eb"
                strokeWidth={3}
                dot={{ r: 5 }}
              />

            </LineChart>
          </ResponsiveContainer>

        </div>
      </div>

      {/* TIMELINE */}
      <div className="mt-6 rounded-2xl border border-gray-800 bg-[#111111] p-6">

        <h3 className="text-lg font-semibold">
          Internship Timeline
        </h3>

        <div className="mt-6 space-y-6">

          {timeline.map(([week, title, status], index) => (
            <div key={week} className="flex gap-4">

              <div className="flex flex-col items-center">

                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                    status === "Completed"
                      ? "bg-green-500/20 text-green-400"
                      : status === "In Progress"
                      ? "bg-blue-500/20 text-blue-400"
                      : "bg-gray-800 text-gray-500"
                  }`}
                >
                  {status === "Completed" ? "✓" : index + 1}
                </div>

                {index < timeline.length - 1 && (
                  <div className="mt-2 h-12 w-px bg-gray-800" />
                )}

              </div>

              <div>
                <p className="text-xs text-gray-500">
                  {week}
                </p>

                <h4 className="mt-1 font-semibold">
                  {title}
                </h4>

                <p className="mt-1 text-sm text-gray-500">
                  {status}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}

/* ================= LEADERBOARD ================= */

function Leaderboard() {
  return (
    <div className="mx-auto max-w-4xl">

      <div className="mb-8">
        <h2 className="text-2xl font-bold">
          Leaderboard
        </h2>

        <p className="mt-2 text-gray-500">
          See how you rank among other interns.
        </p>
      </div>

      <div className="space-y-3">

        {leaderboard.map((intern) => (
          <div
            key={intern.rank}
            className={`flex items-center gap-3 rounded-2xl border p-4 sm:gap-4 ${
              intern.name === "Tayyeba Tariq"
                ? "border-blue-600/50 bg-blue-600/5"
                : "border-gray-800 bg-[#111111]"
            }`}
          >

            <div className="w-7 text-center text-sm font-bold text-gray-500">
              #{intern.rank}
            </div>

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold">
              {intern.initials}
            </div>

            <div className="min-w-0 flex-1">

              <p className="truncate font-semibold">
                {intern.name}
              </p>

              {intern.name === "Tayyeba Tariq" && (
                <p className="text-xs text-blue-400">
                  You
                </p>
              )}

            </div>

            <div className="text-right">

              <p className="font-bold">
                {intern.score}
              </p>

              <p className="text-xs text-gray-600">
                points
              </p>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

/* ================= PROFILE ================= */

function Profile() {
  return (
    <div className="mx-auto max-w-5xl">

      <div className="mb-8">
        <h2 className="text-2xl font-bold">
          My Profile
        </h2>

        <p className="mt-2 text-gray-500">
          Your internship information and developer stats.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">

        {/* PROFILE */}
        <div className="rounded-2xl border border-gray-800 bg-[#111111] p-6 text-center">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-2xl font-bold">
            TT
          </div>

          <h3 className="mt-5 text-xl font-bold">
            Tayyeba Tariq
          </h3>

          <p className="mt-1 text-sm text-blue-400">
            Web Developer Intern
          </p>

          <p className="mt-4 text-sm leading-6 text-gray-500">
            Passionate about web development and learning
            modern technologies through practical projects.
          </p>

        </div>

        {/* INFORMATION */}
        <div className="rounded-2xl border border-gray-800 bg-[#111111] p-6">

          <h3 className="text-lg font-semibold">
            Intern Information
          </h3>

          <div className="mt-5 space-y-4">

            <ProfileItem
              label="Domain"
              value="Web Development"
            />

            <ProfileItem
              label="Program"
              value="Nexariza AI Internship"
            />

            <ProfileItem
              label="Current Week"
              value="Week 3"
            />

            <ProfileItem
              label="Status"
              value="Active"
            />

          </div>

        </div>

        {/* GITHUB */}
        <div className="rounded-2xl border border-gray-800 bg-[#111111] p-6">

          <h3 className="text-lg font-semibold">
            GitHub Stats
          </h3>

          <div className="mt-5 grid grid-cols-2 gap-3">

            <StatBox value="12" label="Repositories" />
            <StatBox value="48" label="Commits" />
            <StatBox value="6" label="Projects" />
            <StatBox value="24" label="Followers" />

          </div>

        </div>

      </div>

      {/* SOCIAL LINKS */}
      <div className="mt-6 rounded-2xl border border-gray-800 bg-[#111111] p-6">

        <h3 className="text-lg font-semibold">
          Social Links
        </h3>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-gray-700 px-4 py-3 text-center hover:border-blue-500 hover:bg-gray-900"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-gray-700 px-4 py-3 text-center hover:border-blue-500 hover:bg-gray-900"
          >
            LinkedIn
          </a>

          <a
            href="mailto:intern@example.com"
            className="rounded-xl border border-gray-700 px-4 py-3 text-center hover:border-blue-500 hover:bg-gray-900"
          >
            Email
          </a>

        </div>
      </div>

    </div>
  );
}

/* ================= SMALL COMPONENTS ================= */

function ProfileItem({ label, value }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-800 pb-3">
      <span className="text-sm text-gray-500">
        {label}
      </span>

      <span className="text-right text-sm font-medium">
        {value}
      </span>
    </div>
  );
}

function StatBox({ value, label }) {
  return (
    <div className="rounded-xl bg-[#0a0a0a] p-4 text-center">
      <p className="text-xl font-bold">
        {value}
      </p>

      <p className="mt-1 text-xs text-gray-600">
        {label}
      </p>
    </div>
  );
}

export default App;