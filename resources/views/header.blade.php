<div style="display: none">
    @if (Auth::check())
        <a href="/dashboard">Dashboard</a>
    @endif
    <a href="/introduction">Introduction</a>
    <a href="/contact">Contact</a>
    <a href="/diagram/timeline">Timeline Diagram</a>
    @if (Auth::check())
        <a href="/user">User</a>
        @if (Auth::User()->role==1)
            <a href='/admin'>Admin</a>
            <a href="/crud/{{ route('inventors') }}">CRUD - inventors</a>
            <a href="/crud/{{ route('inventions') }}">CRUD - inventions</a>
        @endif
        <form method="post" action="/logout" style="display:inline;">
            @csrf
            <input type="submit" value="Logout">
        </form>
        <a href="/contact">Messages</a>
    @endif
</div>
