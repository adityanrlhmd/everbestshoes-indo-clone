<template>
  <div class="flex flex-col w-full gap-5 item-start">
    <h1 class="text-4xl font-bold uppercase">MY Rewards</h1>

    <Table>
      <TableCaption>A list of your rewards.</TableCaption>

      <TableHeader>
        <TableRow>
          <TableHead> Code# </TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Expires On</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        <TableRow>
          <TableCell class="font-medium"> WeleV315956315953 </TableCell>
          <TableCell>IDR50000 Cash Voucher</TableCell>
          <TableCell>Oct 10, 2023</TableCell>
        </TableRow>
      </TableBody>
    </Table>

    <div class="flex items-center ml-auto">
      <Button variant="outline" size="sm" class="text-xs w-fit"> Previous </Button>
      <Button variant="outline" size="sm" class="text-xs w-fit"> Next </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
</script>
