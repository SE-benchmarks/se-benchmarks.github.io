import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle2, XCircle } from "lucide-react"

interface Submission {
  model: string
  resolved: number
  organization: string
  date: string
  repoUrl: string
}

interface LeaderboardTableProps {
  submissions: Submission[]
}

export function LeaderboardTable({ submissions }: LeaderboardTableProps) {
  return (
    <div className="rounded-lg border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Model</TableHead>
            <TableHead className="text-right">% Resolved</TableHead>
            <TableHead>Organization</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Repository</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {submissions
            .sort((a, b) => b.resolved - a.resolved)
            .map((submission, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{submission.model}</TableCell>
                <TableCell className="text-right">{submission.resolved.toFixed(1)}</TableCell>
                <TableCell>{submission.organization}</TableCell>
                <TableCell>{submission.date}</TableCell>
                <TableCell className="text-right">
                  <a
                    href={submission.repoUrl}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  )
}

