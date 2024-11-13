import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-full md:w-1/5 bg-white p-6 min-h-screen sticky top-0 text-black border-r border-gray-400">
      <ul className="space-y-8">
        <li>
          <Link href="/dashboard" className="text-sm md:text-lg hover:text-blue-500">
            Dashboard
          </Link>
        </li>
        <li>
        <Link
  href="/SkillTest"
  className="text-sm md:text-lg text-blue-500 bg-blue-100 rounded-lg px-10 py-3 border border-transparent border-blue-500"
>
  Skill Test
</Link>

        </li>
        <li>
          <Link href="/internship" className="text-sm md:text-lg hover:text-blue-500">
            Internship
          </Link>
        </li>
      </ul>
    </aside>
  );
}



