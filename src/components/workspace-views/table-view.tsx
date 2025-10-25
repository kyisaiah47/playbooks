'use client';

import { useState } from 'react';
import {
  TableProvider,
  TableHeader,
  TableHeaderGroup,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableColumnHeader,
  type ColumnDef,
} from '@/components/ui/shadcn-io/table';
import { Badge } from '@/components/ui/badge';
import { IconTable } from '@tabler/icons-react';

interface TableViewProps {
  guideId: string | null;
}

type PromptTableData = {
  id: string;
  prompt: string;
  type: string;
  status: 'pending' | 'in_progress' | 'completed';
  response: string;
};

export function TableView({ guideId }: TableViewProps) {
  // Mock data - will be replaced with real prompts
  const [data] = useState<PromptTableData[]>([
    {
      id: '1',
      prompt: 'Define your wedding vision',
      type: 'Contextual',
      status: 'completed',
      response: 'Rustic outdoor ceremony with natural elements',
    },
    {
      id: '2',
      prompt: 'Set your budget',
      type: 'Tactical',
      status: 'in_progress',
      response: '$25,000 - $30,000 range',
    },
    {
      id: '3',
      prompt: 'Choose your venue',
      type: 'Decision',
      status: 'pending',
      response: '',
    },
    {
      id: '4',
      prompt: 'Create guest list',
      type: 'Planning',
      status: 'pending',
      response: '',
    },
    {
      id: '5',
      prompt: 'Select vendors',
      type: 'Research',
      status: 'pending',
      response: '',
    },
  ]);

  const columns: ColumnDef<PromptTableData>[] = [
    {
      accessorKey: 'prompt',
      header: ({ column }) => (
        <TableColumnHeader column={column} title="Question" />
      ),
      cell: ({ row }) => (
        <div className="font-medium max-w-md truncate">{row.getValue('prompt')}</div>
      ),
    },
    {
      accessorKey: 'type',
      header: ({ column }) => (
        <TableColumnHeader column={column} title="Type" />
      ),
      cell: ({ row }) => (
        <Badge variant="outline">{row.getValue('type')}</Badge>
      ),
    },
    {
      accessorKey: 'status',
      header: ({ column }) => (
        <TableColumnHeader column={column} title="Status" />
      ),
      cell: ({ row }) => {
        const status = row.getValue('status') as string;
        return (
          <Badge
            variant={
              status === 'completed'
                ? 'default'
                : status === 'in_progress'
                ? 'secondary'
                : 'outline'
            }
          >
            {status.replace('_', ' ')}
          </Badge>
        );
      },
    },
    {
      accessorKey: 'response',
      header: ({ column }) => (
        <TableColumnHeader column={column} title="Response" />
      ),
      cell: ({ row }) => {
        const response = row.getValue('response') as string;
        return (
          <div className="max-w-md truncate text-muted-foreground">
            {response || 'No response yet'}
          </div>
        );
      },
    },
  ];

  if (!guideId) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <IconTable className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-semibold mb-2">No Guide Selected</h3>
          <p className="text-sm text-muted-foreground">
            Select a guide from the dock to view questions
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Table View</h2>
          <p className="text-sm text-muted-foreground">
            Track questions in a spreadsheet format. Click column headers to sort.
          </p>
        </div>

        <TableProvider columns={columns} data={data} className="border rounded-lg">
          <TableHeader>
            {({ headerGroup }) => (
              <TableHeaderGroup headerGroup={headerGroup}>
                {({ header }) => <TableHead header={header} />}
              </TableHeaderGroup>
            )}
          </TableHeader>
          <TableBody>
            {({ row }) => (
              <TableRow row={row}>
                {({ cell }) => <TableCell cell={cell} />}
              </TableRow>
            )}
          </TableBody>
        </TableProvider>
      </div>
    </div>
  );
}
